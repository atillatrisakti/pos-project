import OrderDetail from "./_components/detail-order";

export const metadata = {
  title: "EBA Cafe | Order Detail",
};

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <OrderDetail id={id} />;
}
