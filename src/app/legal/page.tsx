export default function Legal() {
  return (
    <main style={{maxWidth: 800, margin: '0 auto', padding: '2rem'}}>
      <h1>Información Legal</h1>
      
      <section style={{marginBottom: '2rem'}}>
        <h2>Datos de la Empresa</h2>
        <div style={{lineHeight: '1.8'}}>
          <p><strong>Nombre Legal:</strong> Albert&Yudy</p>
          <p><strong>Dirección:</strong> Rua XV de Novembro, 1000 - Centro, Curitiba - PR, 80020-010, Brasil</p>
          <p><strong>Email:</strong> <a href="mailto:suarez880223@gmail.com">suarez880223@gmail.com</a></p>
          <p><strong>Teléfono:</strong> <a href="tel:+5541984385251">+55 41 98438-5251</a></p>
        </div>
      </section>

      <section style={{marginBottom: '2rem'}}>
        <h2>Servicios Ofrecidos</h2>
        <ul style={{lineHeight: '1.8'}}>
          <li>Envío de remesas</li>
          <li>Recarga de celular</li>
          <li>Compra de pasajes</li>
          <li>Asesoría en trámites migratorios</li>
        </ul>
      </section>

      <section>
        <h2>Horario de Atención</h2>
        <p style={{lineHeight: '1.8'}}>
          Lunes a Viernes: 9:00 AM - 6:00 PM<br />
          Sábados: 9:00 AM - 1:00 PM<br />
          Domingos: Cerrado
        </p>
      </section>
    </main>
  );
} 