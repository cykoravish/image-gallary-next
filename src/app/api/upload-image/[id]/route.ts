import { ConnectDB } from "@/lib/db.config";
import { ImageGallaryModel } from "@/lib/image-model.model";
import { DeleteImage } from "@/lib/upload-image";
import { NextRequest, NextResponse } from "next/server";

ConnectDB();

export const DELETE = async (
  req: NextRequest,
  ctx: { params: { id: string } }
) => {

    const imagePublicId = `nextjs-imagegallary/` + ctx.params.id;

  const result_delete = await DeleteImage(imagePublicId);

await ImageGallaryModel.findOneAndDelete({public_id:imagePublicId});

  return NextResponse.json({ msg: result_delete }, { status: 200 });
};
