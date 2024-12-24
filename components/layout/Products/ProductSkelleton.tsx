import { Card } from '@/components/ui/card'; // Supondo que você tenha o componente Card
import { Button } from '@/components/ui/button'; // E o componente Button também
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductSkeleton() {
  return (
    <Card className='rounded-md p-2'>
      <div className="overflow-hidden">
        {/* Skeleton para a imagem */}
        <Skeleton className="w-full h-32 bg-gray-300 animate-pulse rounded-t-md" />
      </div>
      <div className='mt-2 flex flex-col gap-2 p-2'>
        {/* Skeleton para o nome do produto */}
        <Skeleton className="h-6 bg-gray-300 animate-pulse rounded w-3/4" />
        {/* Skeleton para o preço */}
        <Skeleton className="h-4 bg-gray-300 animate-pulse rounded w-1/2" />
        {/* Skeleton para o botão */}
        <Skeleton className="h-10 bg-gray-300 animate-pulse rounded w-full mt-2" />
      </div>
    </Card>
  );
}
