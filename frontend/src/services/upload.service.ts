import { API_BASE_URL } from "./api";

export async function uploadDocument(
  file: File
) {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  const response =
    await fetch(
      `${API_BASE_URL}/api/v1/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

  const data =
    await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
      "Upload failed."
    );
  }

  return data;
}