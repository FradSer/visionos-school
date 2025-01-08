import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Spline
        scene="https://prod.spline.design/D4cqlgXe7zMwbVV7/scene.splinecode"
        className="spline"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: -50,
        }}
      />
      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white">
        <div className="translate translate-y-24">WIP</div>
      </div>
    </main>
  );
}
