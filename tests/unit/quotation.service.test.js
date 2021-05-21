const { QuotationService } = require("../../src/services");
const { QuotationRepositoryMock } = require("../mocks");
const {
  QuotationModelMock: { quotation, quotations },
} = require("../mocks");

describe("Quotation Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a quotation by id", async () => {
    const QuotationRepository = QuotationRepositoryMock;
    QuotationRepository.get.mockReturnValue(quotation);

    const _quotationService = new QuotationService({ QuotationRepository });
    const expected = await _quotationService.get(quotation.id);
    expect(expected).toMatchObject(quotation);
  });

  it("Should return a quotation collection", async () => {
    const QuotationRepository = QuotationRepositoryMock;
    QuotationRepository.getAll.mockReturnValue(quotations);

    const _quotationService = new QuotationService({ QuotationRepository });
    const expected = await _quotationService.getAll();
    expect(expected).toMatchObject(quotations);
  });

  it("Should delete a quotation by id", async () => {
    const QuotationRepository = QuotationRepositoryMock;
    QuotationRepository.delete.mockReturnValue(true);

    const _quotationService = new QuotationService({ QuotationRepository });

    const expected = await _quotationService.repository.delete(quotation.id);
    expect(expected).toEqual(true);
  });
});
