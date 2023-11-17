import data from "../../../schedule.json";

export async function GET() {
  await new Promise((r) => setTimeout(r, 1500));
  return Response.json(data);
}

