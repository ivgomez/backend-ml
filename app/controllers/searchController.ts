import { Request, Response } from "express";
import { SearchService, ItemSearchService } from "../services";

class SearchController {
  searchService: SearchService;
  itemSearchService: ItemSearchService;

  constructor() {
    this.searchService = new SearchService();
    this.itemSearchService = new ItemSearchService();
  }

  public search = async (req: Request, res: Response) => {
    try {
      const { q } = req.query;
      const response = await this.searchService.get(q as string);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const response = await this.itemSearchService.getById(id as string);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  };
}

export const searchController = new SearchController();
