// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import FirebaseAdmin from "@/pages/models/firebase_admin";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = FirebaseAdmin.getInstance().Firestore.collection("test");
  console.log(result);
  res.status(200).json({ name: "John Doe" });
}
