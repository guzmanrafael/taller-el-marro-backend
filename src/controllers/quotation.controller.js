let _quotationService = null;

class QuotationController {
  constructor({ QuotationService }) {
    _quotationService = QuotationService;
  }

  async create(req, res) {
    const { body } = req;
    const createdQuotation = await _quotationService.create(body);
    return res.send(createdQuotation);
  }

  async sendEmail(req, res) {
    const { body } = req;
    const entity = {
      client: body.client,
      pdfData: body.pdfData,
    };
    const sendEmailQuotation = await _quotationService.sendEmail(entity);
    return res.send(sendEmailQuotation);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const quotations = await _quotationService.getAll(pageSize, pageNum);
    return res.send(quotations);
  }

  async get(req, res) {
    const { quotationId } = req.params;
    const quotation = await _quotationService.get(quotationId);
    return res.send(quotation);
  }

  async update(req, res) {
    const { body } = req;
    const { quotationId } = req.params;
    const updatedQuotation = await _quotationService.update(quotationId, body);
    return res.send(updatedQuotation);
  }

  async delete(req, res) {
    const { quotationId } = req.params;
    const deletedQuotation = await _quotationService.delete(quotationId);
    return res.send(deletedQuotation);
  }
}

module.exports = QuotationController;
