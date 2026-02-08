import { RiEqualizerLine, RiBuildingLine, RiMapPinLine } from "@remixicon/react";
import HomeLayout from "../../layout/HomeLayout";
import AdminSidebar from "./components/AdminSidebar";
import Card from "../../components/Card"; 

interface Institution {
  id: number;
  name: string;
  type: string;
  location: string;
}

const mockApproved: Institution[] = [
  { id: 1, name: "Escola Técnica Estadual", type: "Escola", location: "Recife, PE" },
  { id: 2, name: "Universidade Federal (UFPE)", type: "Universidade", location: "Recife, PE" },
  { id: 3, name: "Colégio Santa Maria", type: "Escola", location: "Olinda, PE" },
  { id: 4, name: "Faculdade CESAR", type: "Universidade", location: "Recife, PE" },
];

export default function AdminHome() {
  return (
    <HomeLayout sidebar={<AdminSidebar />}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold text-red-600">
          Bem-vindo, Admin!
        </h1>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="SELECIONE A ESCOLA OU UNIVERSIDADE"
            className="w-full pl-4 pr-12 py-3 border border-red-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white uppercase placeholder-gray-400 text-gray-600 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 cursor-pointer hover:text-red-600 transition-colors">
            <RiEqualizerLine size={24} />
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-green-600 font-bold text-xl mb-6 uppercase flex items-center gap-2 tracking-wide">
            Aprovados 
            <span className="text-sm bg-green-100 px-2 py-0.5 rounded-full">
              {mockApproved.length}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockApproved.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-red-50 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <RiBuildingLine size={24} />
                  </div>
                  <span className="text-xs font-bold uppercase bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                    {item.type}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <RiMapPinLine size={16} />
                  {item.location}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}