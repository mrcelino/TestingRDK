import { NextRequest, NextResponse } from 'next/server';

const foods = [
  { id: 1, name: "Nasi Goreng", date: "01 March 2025" },
  { id: 2, name: "Mie Ayam", date: "02 March 2025" },
  { id: 3, name: "Sate Ayam", date: "03 March 2025" },
  { id: 4, name: "Bakso", date: "04 March 2025" },
  { id: 5, name: "Pizza", date: "05 March 2025" },
  { id: 6, name: "Rendang", date: "06 March 2025" },
  { id: 7, name: "Soto", date: "07 March 2025" },
  { id: 8, name: "Gado-Gado", date: "08 March 2025" },
  { id: 9, name: "Nasi Goreng", date: "09 March 2025" },
  { id: 10, name: "Mie Ayam", date: "10 March 2025" },
  { id: 11, name: "Sate Ayam", date: "11 March 2025" },
  { id: 12, name: "Bakso", date: "12 March 2025" },
  { id: 13, name: "Pizza", date: "13 March 2025" },
  { id: 14, name: "Rendang", date: "14 March 2025" },
  { id: 15, name: "Soto", date: "15 March 2025" },
  { id: 16, name: "Gado-Gado", date: "16 March 2025" },
  { id: 17, name: "Nasi Goreng", date: "17 March 2025" },
  { id: 18, name: "Mie Ayam", date: "18 March 2025" },
  { id: 19, name: "Sate Ayam", date: "19 March 2025" },
  { id: 20, name: "Bakso", date: "20 March 2025" },
  { id: 21, name: "Pizza", date: "21 March 2025" },
  { id: 22, name: "Rendang", date: "22 March 2025" },
  { id: 23, name: "Soto", date: "23 March 2025" },
  { id: 24, name: "Gado-Gado", date: "24 March 2025" },
  { id: 25, name: "Nasi Goreng", date: "25 March 2025" },
  { id: 26, name: "Mie Ayam", date: "26 March 2025" },
  { id: 27, name: "Sate Ayam", date: "27 March 2025" },
  { id: 28, name: "Bakso", date: "28 March 2025" },
  { id: 29, name: "Pizza", date: "29 March 2025" },
  { id: 30, name: "Rendang", date: "30 March 2025" }
];

// Mendapatkan seluruh data tanpa paging
export async function GET(request: NextRequest) {
  return NextResponse.json(foods); // Mengembalikan seluruh data foods
}
