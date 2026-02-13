import Card from '@/components/Card'
import SectionTop from '@/layouts/SectionTop'
import './Popular.scss'

export default () => {
  return (
    <section className="list-cards" aria-labelledby="list-cards-title">
      <div className="container">
        <SectionTop className="popular-top" title="Хиты продаж">
          Колоды, которые чаще всего выбирают и к которым возвращаются —
          проверенные интуицией и опытом.
        </SectionTop>
        <div className="list-cards__w">
          <div className="list-cards__arrow list-cards__arrow-prev">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28265 0.707031L1.41406 6.5752L7.28265 12.4438"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="list-cards__arrow list-cards__arrow-next">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28265 0.707031L1.41406 6.5752L7.28265 12.4438"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="list-cards__slider">
            <div className="list-cards__swiper swiper hit" data-list-cards>
              <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Card title="Таро черных ведьм" img="witch">
                Универсальная колода, который поможет вам быстро освоить основы
                раскладов
              </Card>
            </div>
            <div className="swiper-slide">
              <Card title="Вечная жизнь" img="infinity">
                Универсальная колода, который поможет вам быстро освоить основы
                раскладов
              </Card>
            </div>
            <div className="swiper-slide">
              <Card title="МАК универсальные" img="moon" origin>
                Универсальная колода, который поможет вам быстро освоить основы
                раскладов
              </Card>
            </div>
            <div className="swiper-slide">
              <Card title="Таро теней" img="shades">
                Универсальная колода, который поможет вам быстро освоить основы
                раскладов
              </Card>
            </div>
            <div className="swiper-slide">
              <Card title="Таро Хроноса" img="origin">
                Универсальная колода, который поможет вам быстро освоить основы
                раскладов
              </Card>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
