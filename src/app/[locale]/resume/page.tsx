'use client'

import { useTranslations } from 'next-intl'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  MapPinIcon,
  MailIcon,
  PrinterIcon,
  GlobeIcon
} from 'lucide-react'
import { GitHubIcon } from '@/components/icons/github'
import type {
  CareerProps,
  TranslationProject
} from '@/types'

export default function ResumePage() {
  const t = useTranslations()
  const companies: CareerProps[] = t.raw('career.companies') as CareerProps[]
  const projects: TranslationProject[] = t.raw(
    'projects.items'
  ) as TranslationProject[]

  const skills = [
    ...new Set(
      projects.flatMap((p) => p.tags.map((tag) => tag.name))
    )
  ]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className='flex flex-col w-full md:max-w-3xl mx-auto print:max-w-none print:mx-0'>
      {/* Print Button */}
      <div className='flex justify-end mb-4 print:hidden'>
        <Button
          variant='outline'
          size={null}
          className='p-2 gap-2 shadow'
          onClick={handlePrint}
        >
          <PrinterIcon className='size-4' />
          {t('resume.print')}
        </Button>
      </div>

      {/* Header */}
      <header className='mb-6 print:mb-4'>
        <h1 className='text-3xl font-bold dark:text-neutral-100 text-neutral-900 print:text-2xl'>
          LIM HYUN JIN
        </h1>
        <p className='mt-2 text-pretty font-sans dark:text-neutral-300 text-neutral-700 print:text-sm'>
          {t('hero.about.title')}
        </p>
        <div className='flex flex-wrap gap-3 mt-3 text-sm dark:text-neutral-400 text-neutral-600 print:text-xs'>
          <span className='flex items-center gap-1'>
            <MapPinIcon className='size-3.5' />
            {t('resume.location')}
          </span>
          <a
            href='mailto:jtothemoon1987@gmail.com'
            className='flex items-center gap-1 hover:underline print:underline'
          >
            <MailIcon className='size-3.5' />
            jtothemoon1987@gmail.com
          </a>
          <a
            href='https://github.com/jtothemoon'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 hover:underline print:underline'
          >
            <GitHubIcon className='size-3.5' />
            github.com/jtothemoon
          </a>
          <a
            href='https://jtothemoon.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 hover:underline print:underline'
          >
            <GlobeIcon className='size-3.5' />
            jtothemoon.com
          </a>
        </div>
      </header>

      <hr className='dark:border-neutral-700 border-neutral-300 print:border-neutral-400' />

      {/* About */}
      <section className='my-6 print:my-3'>
        <h2 className='text-lg font-bold dark:text-neutral-100 text-neutral-900 mb-2 print:text-base print:mb-1'>
          {t('resume.about')}
        </h2>
        <p className='text-sm font-sans dark:text-neutral-300 text-neutral-700 leading-relaxed print:text-xs'>
          {t('hero.about.description')}
        </p>
      </section>

      <hr className='dark:border-neutral-700 border-neutral-300 print:border-neutral-400' />

      {/* Career */}
      <section className='my-6 print:my-3'>
        <h2 className='text-lg font-bold dark:text-neutral-100 text-neutral-900 mb-4 print:text-base print:mb-2'>
          {t('resume.career')}
        </h2>
        <div className='flex flex-col gap-6 print:gap-3'>
          {companies.map((company, i) => (
            <div key={i}>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <h3 className='font-semibold dark:text-neutral-100 text-neutral-900 print:text-sm'>
                    {company.link ? (
                      <a
                        href={company.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline'
                      >
                        {company.company}
                      </a>
                    ) : (
                      company.company
                    )}
                  </h3>
                  <Badge
                    variant='secondary'
                    className='shadow rounded-md print:shadow-none print:border print:border-neutral-300'
                  >
                    {company.badges}
                  </Badge>
                </div>
              </div>
              {company.jobs.map((job, j) => (
                <div key={j} className='mt-2 print:mt-1'>
                  <div className='flex items-center justify-between'>
                    <h4 className='text-sm font-medium dark:text-neutral-200 text-neutral-800 print:text-xs'>
                      {job.title}
                    </h4>
                    <time className='text-xs dark:text-neutral-400 text-neutral-500 whitespace-nowrap print:text-[10px]'>
                      {job.start} — {job.end}
                    </time>
                  </div>
                  <ul className='mt-1 text-sm dark:text-neutral-400 text-neutral-600 print:text-xs'>
                    {job.description.map((desc, k) => (
                      <li key={k} className='leading-relaxed print:leading-normal'>
                        - {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <hr className='dark:border-neutral-700 border-neutral-300 print:border-neutral-400' />

      {/* Skills */}
      <section className='my-6 print:my-3'>
        <h2 className='text-lg font-bold dark:text-neutral-100 text-neutral-900 mb-3 print:text-base print:mb-2'>
          {t('resume.skills')}
        </h2>
        <div className='flex flex-wrap gap-1.5'>
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant='secondary'
              className='text-xs px-2 py-0.5 rounded-md shadow print:text-[10px] print:shadow-none print:border print:border-neutral-300'
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <hr className='dark:border-neutral-700 border-neutral-300 print:border-neutral-400' />

      {/* Projects */}
      <section className='my-6 print:my-3'>
        <h2 className='text-lg font-bold dark:text-neutral-100 text-neutral-900 mb-4 print:text-base print:mb-2'>
          {t('resume.projects')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-3 print:gap-1.5'>
          {projects.map((project, i) => (
            <div
              key={i}
              className='border rounded-lg p-3 dark:border-neutral-700 border-neutral-300 print:p-1.5 print:border-neutral-400 print:break-inside-avoid'
            >
              <h3 className='font-semibold text-sm dark:text-neutral-100 text-neutral-900 print:text-[11px]'>
                {project.link?.preview ?? project.link?.github ? (
                  <a
                    href={project.link.preview ?? project.link.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className='text-xs dark:text-neutral-400 text-neutral-600 mt-1 line-clamp-2 print:text-[9px] print:line-clamp-1'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-1 mt-1.5'>
                {project.tags.map((tag) => (
                  <Badge
                    key={tag.name}
                    variant='secondary'
                    className='text-[10px] px-1.5 py-0 rounded print:text-[8px] print:shadow-none print:border print:border-neutral-300'
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
