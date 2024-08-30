import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const drivers = [
      { id: 1, name: "John Doe", phoneNumber: "123-456-7890" },
      { id: 2, name: "Jane Smith", phoneNumber: "987-654-3210" }
    ];
    return NextResponse.json(drivers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
