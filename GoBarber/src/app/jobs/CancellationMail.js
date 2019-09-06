import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
    // Retorna uma chave única porque cada job precisa de uma chave única
  }

  /**
   * Tarefa que será executada sempre que o CancellationMail for chamado.
   */
  async handle({ data }) {
    const { appointment } = data;

    /**
     * O processo abaixo leva em média uns 2/3 segundos para ser executado.
     * Nesse tempo a execucação fica pausa por conta do await.
     * Tirando o await nesse caso, o processo não travaria o andamento do projeto.
     * Porém não teríamos acesso aos erros que podem ocorrer.
     * A melhor forma para controlar ações que levam mais tempo, não precisam finalizar
     * naquele momento e queremos ter controle sobre o processo é usar filas/jobs.
     */
    const teste = parseISO(appointment.date);
    console.log(teste);
    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}
export default new CancellationMail();
