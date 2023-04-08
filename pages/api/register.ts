import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "../../libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { username, email, name, password } = req.body;

    const hashedpassword = await bcrypt.hash(password, 12);

    const user = await prisma?.user.create({
      data: {
        name,
        username,
        email,
        hashedpassword,
      },
    });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
}
