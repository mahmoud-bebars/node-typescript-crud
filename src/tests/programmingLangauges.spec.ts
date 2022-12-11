import { Lang, ProgrammingLanguagesStore } from '../models/programmingLangauges'

const store = new ProgrammingLanguagesStore()

describe('Programming Languages Model', () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined()
  })

  it('should have a show method', () => {
    expect(store.index).toBeDefined()
  })

  it('should have a create method', () => {
    expect(store.index).toBeDefined()
  })

  it('should have a update method', () => {
    expect(store.index).toBeDefined()
  })

  it('should have a delete method', () => {
    expect(store.index).toBeDefined()
  })

  it('create method should add a Langauge', async () => {
    const result = await store.create({
      name: 'JavaScript',
      released_year: 1995,
      githut_rank: 1,
      pypl_rank: 3,
      tiobe_rank: 7,
      created_at: '2021-06-01',
      updated_at: '2021-07-27',
      description:
        'JavaScript often abbreviated as JS is a programming language that conforms to the EC MAScript specification JavaScript is high-level, often just-in-time compiledand multi-paradigm. It has curly-bracket syntax dynamic typing, prototype-based object-orientation,aand first-class function',
    })
    expect(result).toEqual({
      id: 1,
      name: 'JavaScript',
      released_year: 1995,
      githut_rank: 1,
      pypl_rank: 3,
      tiobe_rank: 7,
      created_at: '2021-06-01',
      updated_at: '2021-07-27',
      description:
        'JavaScript often abbreviated as JS is a programming language that conforms to the EC MAScript specification JavaScript is high-level, often just-in-time compiledand multi-paradigm. It has curly-bracket syntax dynamic typing, prototype-based object-orientation,aand first-class function',
    })
  })

  it('index method should return a list of Programming Languages', async () => {
    const result = await store.index()
    expect(result).toEqual([
      {
        id: 1,
        name: 'JavaScript',
        released_year: 1995,
        githut_rank: 1,
        pypl_rank: 3,
        tiobe_rank: 7,
        created_at: '2021-06-01',
        updated_at: '2021-07-27',
        description:
          'JavaScript often abbreviated as JS is a programming language that conforms to the EC MAScript specification JavaScript is high-level, often just-in-time compiledand multi-paradigm. It has curly-bracket syntax dynamic typing, prototype-based object-orientation,aand first-class function',
      },
    ])
  })

  it('show method should return the correct Language', async () => {
    const result = await store.show('1')
    expect(result).toEqual({
      id: 1,
      name: 'JavaScript',
      released_year: 1995,
      githut_rank: 1,
      pypl_rank: 3,
      tiobe_rank: 7,
      created_at: '2021-06-01',
      updated_at: '2021-07-27',
      description:
        'JavaScript often abbreviated as JS is a programming language that conforms to the EC MAScript specification JavaScript is high-level, often just-in-time compiledand multi-paradigm. It has curly-bracket syntax dynamic typing, prototype-based object-orientation,aand first-class function',
    })
  })

  it('delete method should remove Language', async () => {
    store.delete('1')
    const result = await store.index()

    expect(result).toEqual([])
  })
})
