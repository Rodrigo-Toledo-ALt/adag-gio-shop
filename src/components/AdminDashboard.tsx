
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from "sonner";
import { usePianos } from '@/hooks/usePianos';

interface PianoFormData {
  id?: number;
  name: string;
  model: string;
  price: string;
  image: string;
  rentOption?: string;
  description?: string;
}

const AdminDashboard = () => {
  const { pianos, addPiano, updatePiano, deletePiano } = usePianos();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [formData, setFormData] = useState<PianoFormData>({
    name: '',
    model: '',
    price: '',
    image: '/assets/piano1.jpg',
    rentOption: '',
    description: ''
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      model: '',
      price: '',
      image: '/assets/piano1.jpg',
      rentOption: '',
      description: ''
    });
  };

  const handleAddPiano = () => {
    addPiano({
      ...formData,
      price: formData.price,
      id: Date.now() // Simple unique ID for demo
    });
    toast.success('Piano añadido correctamente');
    setIsAddDialogOpen(false);
    resetForm();
  };

  const handleEditPiano = (piano: any) => {
    setFormData(piano);
    setIsEditDialogOpen(true);
  };

  const handleUpdatePiano = () => {
    if (!formData.id) return;
    
    updatePiano(formData.id, formData);
    toast.success('Piano actualizado correctamente');
    setIsEditDialogOpen(false);
    resetForm();
  };

  const handleDeletePiano = (id: number) => {
    if (window.confirm('¿Está seguro de eliminar este piano?')) {
      deletePiano(id);
      toast.success('Piano eliminado correctamente');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-serif font-semibold text-[#2c3e50]">Administración de Pianos</h2>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#2c3e50]">
              <Plus size={16} className="mr-2" /> Añadir Piano
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Piano</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="model">Modelo</Label>
                <Input id="model" name="model" value={formData.model} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Precio (€)</Label>
                <Input id="price" name="price" value={formData.price} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rentOption">Opción de alquiler (€/mes)</Label>
                <Input id="rentOption" name="rentOption" value={formData.rentOption} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">URL de imagen</Label>
                <Input id="image" name="image" value={formData.image} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descripción</Label>
                <Input id="description" name="description" value={formData.description} onChange={handleInputChange} />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleAddPiano} className="bg-[#2c3e50]">Guardar</Button>
            </div>
          </DialogContent>
        </Dialog>
        
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Piano</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Nombre</Label>
                <Input id="edit-name" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-model">Modelo</Label>
                <Input id="edit-model" name="model" value={formData.model} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-price">Precio (€)</Label>
                <Input id="edit-price" name="price" value={formData.price} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-rentOption">Opción de alquiler (€/mes)</Label>
                <Input id="edit-rentOption" name="rentOption" value={formData.rentOption} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-image">URL de imagen</Label>
                <Input id="edit-image" name="image" value={formData.image} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Descripción</Label>
                <Input id="edit-description" name="description" value={formData.description || ''} onChange={handleInputChange} />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleUpdatePiano} className="bg-[#2c3e50]">Actualizar</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pianos.map((piano) => (
            <TableRow key={piano.id}>
              <TableCell>
                <img 
                  src={piano.image} 
                  alt={piano.name} 
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell className="font-semibold">{piano.name}</TableCell>
              <TableCell>{piano.model}</TableCell>
              <TableCell>{piano.price} €</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEditPiano(piano)}
                    className="border-[#2c3e50] text-[#2c3e50]"
                  >
                    <Edit size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleDeletePiano(piano.id)}
                    className="border-red-500 text-red-500"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminDashboard;
