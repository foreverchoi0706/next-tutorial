import type { NextApiRequest, NextApiResponse } from "next";
import FirebaseAdmin from "@/models/firebase_admin";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { uid, email, displayName, photoURL } = req.body;

  console.log(uid, email, displayName, photoURL);

  if (uid === undefined || uid === null) {
    res.status(400).json({ result: false, message: "uid가 누락되었습니다." });
  }
  if (email === undefined || email === null) {
    res.status(400).json({ result: false, message: "email가 누락되었습니다." });
  }

  FirebaseAdmin.getInstance()
    .Firestore.collection("members")
    .doc(uid)
    .set({
      uid,
      email,
      displayName: displayName ?? "",
      photoURL: photoURL ?? "",
    })
    .then((value) => {
      const screenName = email.replace("@gmail.com", "");
      FirebaseAdmin.getInstance()
        .Firestore.collection("screenNames")
        .doc(screenName)
        .set({
          uid,
          email,
          displayName: displayName ?? "",
          photoURL: photoURL ?? "",
        })
        .then((value) => {
          res.status(200).json({ result: true, value });
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ result: false });
    });
}
