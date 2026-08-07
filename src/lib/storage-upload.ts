import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export async function uploadAvatar(file: File): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `avatar/photo-${Date.now()}.${ext}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, { contentType: file.type });
  return getDownloadURL(storageRef);
}

export async function uploadResume(file: File): Promise<string> {
  const path = `resume/resume-${Date.now()}.pdf`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, { contentType: "application/pdf" });
  return getDownloadURL(storageRef);
}
