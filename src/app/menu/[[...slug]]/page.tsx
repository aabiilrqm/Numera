import Image from "next/image";

type DetailProductPageProps = { params: { slug: string[] } };

async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch("http://localhost:3000/api/menu", {
    cache: 'force-cache', 
    next: {
      tags: ["menu"]
      // revalidate: 5
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  const { slug } = await params;

  const data = await getData();
  console.log(data);
  return (
    <div>
      {slug ? "Product page" : "Detail product page"}

      <div>
        {data.menu.map((item: any) => (
          <div key={item.id}>
            {/* <Image src={item.image} width={30} height={30} alt={item.label} /> */}

            <img src={item.image} alt='' width={100} />
            <p>{item.label}</p>

          </div>
        ))}
      </div>

      {slug && <p>{slug[0]}</p>}
    </div>
  );
}
