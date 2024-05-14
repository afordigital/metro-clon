import { getSchedule } from "@/services/metro";

export async function POST(request: Request) {
  return Response.json(await getSchedule(await request.json()));
}
