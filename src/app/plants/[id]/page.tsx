import { Plant } from '@/modules/Plant';

type PlantPageProps = { params: { id: string } };

export default function PlantPage({ params }: PlantPageProps) {
  return <Plant id={params.id} />;
}
