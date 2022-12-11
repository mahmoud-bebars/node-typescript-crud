import Database from '../databse'

export type Lang = {
  id?: number
  name: string
  released_year: number
  githut_rank: number
  pypl_rank: number
  tiobe_rank: number
  created_at: string
  updated_at: string
  description: string
}

export class ProgrammingLanguagesStore {
  async index(): Promise<Lang[]> {
    try {
      const conn = await Database.connect()
      const sql = 'SELECT * FROM programming_languages'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Cannot get Languages ${err}`)
    }
  }
  async show(id: string): Promise<Lang> {
    try {
      const conn = await Database.connect()
      const sql = 'SELECT * FROM programming_languages WHERE id=($1)'
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Could not find language with id: ${id}. Error: ${err}`)
    }
  }
  async create(l: Lang): Promise<Lang> {
    try {
      const conn = await Database.connect()
      const sql =
        'INSERT INTO programming_languages (name,released_year,githut_rank,pypl_rank,tiobe_rank,created_at,updated_at,description) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
      const result = await conn.query(sql, [
        l.name,
        l.released_year,
        l.githut_rank,
        l.pypl_rank,
        l.tiobe_rank,
        l.created_at,
        l.updated_at,
        l.description,
      ])
      const langauge = result.rows[0]
      conn.release()
      return langauge
    } catch (err) {
      throw new Error(
        `Could not add langauge with name ${l.name}. Error: ${err}`
      )
    }
  }
  async update(l: Lang): Promise<Lang> {
    try {
      const conn = await Database.connect()
      const sql =
        'UPDATE programming_languages SET name=($2),released_year=($3),githut_rank=($4),pypl_rank=($5),tiobe_rank=($6),created_at=($7),updated_at=($8),description=($9) WHERE id=($1) RETURNING *'
      const result = await conn.query(sql, [
        l.id,
        l.name,
        l.released_year,
        l.githut_rank,
        l.pypl_rank,
        l.tiobe_rank,
        l.created_at,
        l.updated_at,
        l.description,
      ])
      const langauge = result.rows[0]
      conn.release()
      return langauge
    } catch (err) {
      throw new Error(
        `Could not update langauge with id: ${l.name}. Error: ${err}`
      )
    }
  }
  async delete(id: string): Promise<Lang> {
    try {
      const sql = 'DELETE FROM programming_languages WHERE id=($1)'

      const conn = await Database.connect()

      const result = await conn.query(sql, [id])

      const langauge = result.rows[0]

      conn.release()

      return langauge
    } catch (err) {
      throw new Error(`Could not delete language with id: ${id}. Error: ${err}`)
    }
  }
}
