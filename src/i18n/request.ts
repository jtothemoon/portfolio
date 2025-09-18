/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export type Locale = (typeof locales)[number]

export const locales = ['ko', 'en']

export const defaultLocale = 'ko' satisfies Locale

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // Validate and provide fallback if needed
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale
  }

  const baseLocale = new Intl.Locale(locale).baseName

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocale)) notFound()

  return {
    locale,
    messages: (await (locale === 'ko'
        ? import('../messages/ko.json')
        : import(`../messages/${locale}.json`))).default
  }
})
