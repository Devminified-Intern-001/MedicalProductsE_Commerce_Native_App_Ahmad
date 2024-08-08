import { useCallback, useState } from "react";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

/** Converts a blob to a base64 string */
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

export type UseImagePickerProps = Omit<
  ImagePicker.ImagePickerOptions,
  "base64"
> & {
  /** Error text that will be thrown if the user doesn't provide the permission to access the device media. */
  permissionNotGrantedText?: string;
};

type UploadImageOptions = {
  /** @default 'blob' */
  mode?: "blob" | "base64";
  /** Call reset() on successful upload. Useful for disabling upload button and cleaning a form's dirtiness.
   * @default true */
  resetOnSuccess?: boolean;
};

export type UseImagePickerReturn = {
  /** The URI of the selected media */
  uri: string | undefined;
  /** Same as `!!uri`, but prettier. */
  isPicked: boolean;
  /** Picks a media.
   *
   * You must try/catch this as it may throw errors like if user doesn't provide the permission.
   *
   * @throws */
  pick: (opts?: {
    /** If it shall immediatly upload after picking the image. */
    uploadAfterPick?: UploadImageOptions & {
      uploadFunction: (data: any) => any;
    };
  }) => Promise<void>;
  /** Uploads the picked media.
   *
   * If you want to pick and immediatly upload it, use pickImage() with uploadAfterPick option,
   * as if you call pick() and upload(), the image's state may not be yet updated.
   *
   * @throws */
  upload: (fun: (data: any) => any, opts?: UploadImageOptions) => Promise<any>;
  /** Resets the picked media. Automatically called if `resetOnUpload`. */
  reset: () => void;
};

async function uploadImageByUri({
  uri,
  fun,
  mode,
}: {
  fun: (data: any) => any;
  uri: string;
  mode: "blob" | "base64";
}) {
  const blob = await new Promise<Blob>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.warn(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  try {
    if (mode === "base64") {
      const base64 = await blobToBase64(blob);
      await fun(base64);
    } else if (mode === "blob") {
      await fun(blob);
    }
  } finally {
    // We're done with the blob, close and release it
    (blob as any).close();
  }
}

export function useImagePicker({
  permissionNotGrantedText = "We need your permission to access your media!",
  ...rest
}: UseImagePickerProps = {}): UseImagePickerReturn {
  const [uri, setImage] = useState<string | undefined>(undefined); // Undefined as <Image source={{uri}} is string | undefined.

  const reset = useCallback(() => {
    setImage(undefined);
  }, []);

  const uploadImageCore = useCallback(
    async ({
      fun,
      opts,
      uri,
    }: {
      fun: (data: any) => any;
      opts?: UploadImageOptions;
      uri: string | undefined;
    }) => {
      if (!uri) throw new Error("Image not set!");

      await uploadImageByUri({ fun, uri, mode: opts?.mode ?? "blob" });

      if (opts?.resetOnSuccess ?? true) reset();
    },
    [reset]
  );

  const pick = useCallback<UseImagePickerReturn["pick"]>(
    async (opts = {}) => {
      const { uploadAfterPick } = opts;
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") throw new Error(permissionNotGrantedText);
      }
      const result = await ImagePicker.launchImageLibraryAsync(rest);

      // Do nothing if cancelled
      if (result.canceled) return;

      const uri = result.assets[0]?.uri; // Use result.assets to get the selected asset
      if (uploadAfterPick) {
        const { uploadFunction, ...opts } = uploadAfterPick;
        await uploadImageCore({
          fun: uploadFunction,
          uri,
          opts,
        });
      } else setImage(uri);
    },
    [rest, uploadImageCore, permissionNotGrantedText]
  );

  const upload = useCallback<UseImagePickerReturn["upload"]>(
    async (fun, opts) => {
      await uploadImageCore({ fun, opts, uri });
    },
    [uri, uploadImageCore]
  );

  return {
    uri,
    pick,
    upload,
    isPicked: !!uri,
    reset,
  };
}
