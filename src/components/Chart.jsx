import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const ImportanceChart = () => {
  const chartRef = useRef(null); // Referencia al canvas
  const chartInstance = useRef(null); // Referencia al gráfico para limpiar al desmontar

  useEffect(() => {
    const ctx = chartRef.current;
    if (ctx) {
      // Si ya existe un gráfico, destrúyelo antes de crear uno nuevo
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Marketing", "Diseño", "Desarrollo Web"],
          datasets: [
            {
              data: [40, 30, 30], // Datos porcentuales representativos
              backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
              hoverBackgroundColor: ["#e63950", "#2b8cca", "#e6b800"],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Limpieza al desmontar
      }
    };
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">¿Por qué es importante?</h2>
      <div className="row align-items-center">
        {/* Gráfico de dona */}
        <div className="col-md-6">
          <canvas ref={chartRef}></canvas>
        </div>

        {/* Explicación del gráfico con información más detallada */}
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong className="text-danger">📢 Marketing:</strong>
              <p className="mb-0">
                El marketing es crucial para atraer y retener clientes. Incluye estrategias de publicidad, gestión de redes sociales, optimización de motores de búsqueda y análisis de datos para conocer a tu audiencia y posicionar tu marca de forma efectiva en el mercado.
              </p>
            </li>
            <li className="list-group-item">
              <strong className="text-primary">🎨 Diseño:</strong>
              <p className="mb-0">
                Un diseño atractivo y funcional crea una identidad visual sólida. Se encarga de la estética y la experiencia de usuario, facilitando la navegación y transmitiendo profesionalismo, lo cual es fundamental para generar confianza y destacar frente a la competencia.
              </p>
            </li>
            <li className="list-group-item">
              <strong className="text-warning">💻 Desarrollo Web:</strong>
              <p className="mb-0">
                El desarrollo web garantiza que tu presencia en línea sea robusta y accesible. Consiste en la creación de sitios y aplicaciones que son responsivos, optimizados para buscadores y seguros, asegurando una experiencia de usuario fluida y eficiente en cualquier dispositivo.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImportanceChart;
