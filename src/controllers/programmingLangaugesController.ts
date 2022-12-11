import { Request, Response } from 'express'
import { Lang, ProgrammingLanguagesStore } from '../models/programmingLangauges'

const store = new ProgrammingLanguagesStore()

const index = async (req: Request, res: Response) => {
  try {
    const Langauges = await store.index()
    res.status(200).json({
      results: Langauges,
      message: `${Langauges.length} langauge has been retrived succesfully`,
    })
  } catch (error) {
    res.status(200).json({ error: error })
  }
}

const show = async (req: Request, res: Response) => {
  const id: string = req.params.id
  try {
    const Langauge = await store.show(id)
    res.status(200).json({
      results: Langauge,
      message: `langauge with id:${id} has been retrived succesfully`,
    })
  } catch (error) {
    res.status(200).json({ error: error })
  }
}

const create = async (req: Request, res: Response) => {
  const language: Lang = {
    name: req.body.name,
    released_year: req.body.released_year,
    githut_rank: req.body.githut_rank,
    pypl_rank: req.body.pypl_rank,
    tiobe_rank: req.body.tiobe_rank,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
    description: req.body.description,
  }

  try {
    const createdLangauge = await store.create(language)
    res.status(200).json({
      results: createdLangauge,
      message: `New langauge with id:${createdLangauge.id} has been created succesfully`,
    })
  } catch (error) {
    res.status(400).send({ message: `error here: ${error}` })
  }
}

const update = async (req: Request, res: Response) => {
  const language: Lang = {
    id: req.body.id,
    name: req.body.name,
    released_year: req.body.released_year,
    githut_rank: req.body.githut_rank,
    pypl_rank: req.body.pypl_rank,
    tiobe_rank: req.body.tiobe_rank,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
    description: req.body.description,
  }
  try {
    const UpdatedLangauge = await store.update(language)
    res.status(200).send({
      Results: UpdatedLangauge,
      message: `Language updated successfully`,
    })
  } catch (error) {
    res.status(400).send({ message: `error here: ${error}` })
  }
}

const remove = async (req: Request, res: Response) => {
  const id: string = req.params.id
  try {
    const removedLangauge = await store.delete(id)
    res.status(200).json({
      results: removedLangauge,
      message: `langauge with id:${id} has been removed succesfully`,
    })
  } catch (error) {
    res.status(200).json({ error: error })
  }
}

export default {
  index,
  show,
  create,
  update,
  remove,
}
