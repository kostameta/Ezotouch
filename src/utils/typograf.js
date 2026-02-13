import Typograf from 'typograf'

const tp = new Typograf({ locale: ['ru', 'en-US'] })

tp.enableRule('common/punctuation/quote')
tp.enableRule('common/nbsp/beforeShortLastWord')
tp.enableRule('common/nbsp/afterShortWord')
tp.enableRule('ru/nbsp/afterShortWord')
tp.enableRule('ru/nbsp/beforeShortLastWord')
tp.enableRule('ru/nbsp/afterParticle')
tp.enableRule('ru/nbsp/afterPreposition')

export default function typograf(text) {
  if (!text || typeof text !== 'string') {
    return text
  }
  return tp.execute(text)
}
