export default function MagiaDoJSX() {
  
  const magia = <strong>HTML dentro do JavaScript</strong>
  const tecnologias = "React e Next.js"

  return (
    <div className="bg-blue-300 p-2 m-3 rounded-xl">
      <p>Este é o meu componente MagiaDoJSX -  {magia}</p>
      <p>Um componente é uma função que retorna JSX - {tecnologias}</p>
    </div>
  )
}