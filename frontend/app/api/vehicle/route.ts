import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const vehicles = [
      { id: 1, vehicleNumber: "ABC123", vehicleType: "Sedan" },
      { id: 2, vehicleNumber: "XYZ789", vehicleType: "SUV" }
    ];
    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
