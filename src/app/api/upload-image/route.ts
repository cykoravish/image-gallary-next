import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as unknown as File;
    return NextResponse.json({ msg: image }, { status: 200 });
  } catch (error) {
    console.log("error in api: ", error);
    return NextResponse.json(
      { msg: "internal serverl error" },
      { status: 500 }
    );
  }
};
