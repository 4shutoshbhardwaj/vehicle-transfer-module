
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await axios.get('http://localhost:3001/vehicle');
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.error();
  }
}
