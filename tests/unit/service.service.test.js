const { ServiceService } = require("../../src/services");
const { ServiceRepositoryMock } = require("../mocks");
const {
  ServiceModelMock: { service, services },
} = require("../mocks");

describe("Service Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a service by id", async () => {
    const ServiceRepository = ServiceRepositoryMock;
    ServiceRepository.get.mockReturnValue(service);

    const _serviceService = new ServiceService({ ServiceRepository });
    const expected = await _serviceService.get(service.id);
    expect(expected).toMatchObject(service);
  });

  it("Should return a service collection", async () => {
    const ServiceRepository = ServiceRepositoryMock;
    ServiceRepository.getAll.mockReturnValue(services);

    const _serviceService = new ServiceService({ ServiceRepository });
    const expected = await _serviceService.getAll();
    expect(expected).toMatchObject(services);
  });

  it("Should update a service by id", async () => {
    const ServiceRepository = ServiceRepositoryMock;
    ServiceRepository.update.mockReturnValue(service);

    const _serviceService = new ServiceService({ ServiceRepository });
    const expected = await _serviceService.repository.update(
      service.id,
      service
    );
    expect(expected).toMatchObject(service);
  });

  it("Should delete a service by id", async () => {
    const ServiceRepository = ServiceRepositoryMock;
    ServiceRepository.delete.mockReturnValue(true);

    const _serviceService = new ServiceService({ ServiceRepository });

    const expected = await _serviceService.repository.delete(service.id);
    expect(expected).toEqual(true);
  });
});
