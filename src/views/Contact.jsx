const Contact = () => {
    return (
    <section id="contact" className="bg-[#0a1128] text-center text-[#fefcfb] py-20 ">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="max-w-2xl mx-auto">Aquí puedes proporcionar tus redes sociales o métodos de contacto.</p>
        <div className="flex justify-center mt-4">
          {/* Añadir iconos de redes sociales */}
            <a href="https://twitter.com" className="mx-2 text-blue-500">Twitter</a>
            <a href="https://linkedin.com" className="mx-2 text-blue-700">LinkedIn</a>
            <a href="https://github.com" className="mx-2 text-gray-900">GitHub</a>
        </div>
    </section>)
}
export default Contact ;