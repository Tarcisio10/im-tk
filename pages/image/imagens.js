import Image from 'next/image';

function Asas() {
  return <Image src="/asas.jpeg" alt="2" width="564" height="564" />;
}

function Tempo2() {
  return <Image src="/tempo2.jpg" alt="1" width="564" height="564" />;
}

function ShowImagens(Asas, Tempo2) {
  return (
    <div>
      <Asas />
      <Tempo2 />
    </div>
  );
}

export { Asas, Tempo2 };
export default ShowImagens;
