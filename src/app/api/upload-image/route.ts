import { ConnectDB } from "@/lib/db.config";
import { ImageGallaryModel } from "@/lib/image-model.model";
import { UploadImage } from "@/lib/upload-image";
import { NextRequest, NextResponse } from "next/server";

ConnectDB();

export const GET = async () => {
  const Images = await ImageGallaryModel.find({});

  return NextResponse.json(
    { images: Images, total: Images.length },
    { status: 200 }
  );
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as unknown as File;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await UploadImage(image, "nextjs-imagegallary");

    await ImageGallaryModel.create({
      image_url: data?.secure_url,
      public_id: data?.public_id,
    });

    return NextResponse.json({ msg: data }, { status: 200 });
  } catch (error) {
    console.log("error in api: ", error);
    return NextResponse.json(
      { msg: "internal serverl error" },
      { status: 500 }
    );
  }
};
