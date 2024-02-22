import Container from "./(components)/Container/Container";
import BlockInfo from "./(components)/BlockInfo/BlockInfo";

export default function Home() {
  return (
    <main className="bg-gray h-screen flex justify-center">
      <Container>
        <BlockInfo />
      </Container>
    </main>
  );
}
