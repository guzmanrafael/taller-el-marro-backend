const { Transporter } = require("../helpers");
const { transporter } = require("../helpers/mailer");
const BaseService = require("./base.service");

let _clientService = null;
let _quotationRepository = null;

class QuotationService extends BaseService {
  constructor({ QuotationRepository, ClientService }) {
    super(QuotationRepository);
    _clientService = ClientService;
    _quotationRepository = QuotationRepository;
  }

  async create(entity) {
    const existClient = await _clientService.get(entity.clientId);
    if (!existClient) {
      const error = new Error();
      error.status = 404;
      error.message = "Client does not found";
      throw error;
    }
    return await _quotationRepository.create(entity);
  }

  async sendEmail(entity) {
    await Transporter.transporter.sendMail({
      from: '"Taller El Marro" <pruebatallerelmarro@gmail.com>',
      to: entity.client,
      subject: "Cotización Taller El Marro",
      text: "Estimado cliente, le adjunto el archivo de la cotización. Muchas gracias por su confianza, esperamos su respuesta.",
      attachments: [
        {
          filename: "cotización.pdf",
          path: entity.pdfData,
        },
      ],
    });
    return true;
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Id Must be Sent";
      throw error;
    }

    const currentEntity = await _quotationRepository.get(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "Entity does not found";
      throw error;
    }

    const existClient = await _clientService.get(entity.clientId);
    if (!existClient) {
      const error = new Error();
      error.status = 404;
      error.message = "Client does not found";
      throw error;
    }

    return await _quotationRepository.update(id, entity);
  }
}

module.exports = QuotationService;
