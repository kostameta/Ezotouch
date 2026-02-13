import SectionTop from '@/layouts/SectionTop'
import './Another.scss'

/**
 * @param {Object} props
 * @param {string} [props.deckHref='/pack'] — ссылка на страницу колоды для кнопки «Вернуться в колоду»
 * @param {{ num: number, title: string, url: string, original: string }[]} [props.tableRows=[]] — строки таблицы (карты колоды)
 */
export default ({ deckHref = '/pack', tableRows = [] }) => {
  const rows =
    tableRows.length > 0
      ? tableRows
      : [{ num: 0, title: 'Шут', url: '/card', original: 'The FooL' }]

  return (
    <section className="another" aria-labelledby="article-title">
      <div className="container">
        <SectionTop
          title="Следуй за энергией колоды"
          btn="Вернуться в колоду"
          btnHref={deckHref}
          className="another-top"
        >
          <span className="opa-6">
            Погрузись в мир, где каждая карта хранит свои тайны
          </span>
        </SectionTop>
        <div className="another__w">
          <table className="article__table">
            <thead>
              <tr>
                <th>Порядковый номер карты в&nbsp;колоде</th>
                <th>Название карты</th>
                <th>Оригинальное название</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.num + (row.url || '')}>
                  <td>{row.num}</td>
                  <td>
                    <a href={row.url}>{row.title}</a>
                  </td>
                  <td>{row.original}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
