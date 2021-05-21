const { WorkShopService } = require("../../src/services");
const { WorkShopRepositoryMock } = require("../mocks");
const {
  WorkShopModelMock: { workShop, workShops },
} = require("../mocks");

describe("WorkShop Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a workshop by id", async () => {
    const WorkShopRepository = WorkShopRepositoryMock;
    WorkShopRepository.get.mockReturnValue(workShop);

    const _workShopService = new WorkShopService({ WorkShopRepository });
    const expected = await _workShopService.get(workShop.id);
    expect(expected).toMatchObject(workShop);
  });

  it("Should return a workShop collection", async () => {
    const WorkShopRepository = WorkShopRepositoryMock;
    WorkShopRepository.getAll.mockReturnValue(workShops);

    const _workShopService = new WorkShopService({ WorkShopRepository });
    const expected = await _workShopService.getAll();
    expect(expected).toMatchObject(workShops);
  });

  it("Should update a workShop by id", async () => {
    const WorkShopRepository = WorkShopRepositoryMock;
    WorkShopRepository.update.mockReturnValue(workShop);

    const _workShopService = new WorkShopService({ WorkShopRepository });
    const expected = await _workShopService.repository.update(
      workShop.id,
      workShop
    );
    expect(expected).toMatchObject(workShop);
  });

  it("Should delete a workShop by id", async () => {
    const WorkShopRepository = WorkShopRepositoryMock;
    WorkShopRepository.delete.mockReturnValue(true);

    const _workShopService = new WorkShopService({ WorkShopRepository });

    const expected = await _workShopService.repository.delete(workShop.id);
    expect(expected).toEqual(true);
  });
});
