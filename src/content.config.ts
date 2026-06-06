import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Schema canónico de un curso. La fuente de verdad documental está en
 * /AGENTS.md y en planes/contenido/README.md. Si editas este schema,
 * actualiza también esos archivos.
 */
const cursos = defineCollection({
  loader: glob({ pattern: '**/curso.md', base: './src/content/cursos' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z
      .string()
      .min(1)
      .regex(/^[a-z0-9-]+$/, 'slug debe ser kebab-case'),
    description: z.string().min(1),
    track: z.enum([
      'desarrollo-web',
      'apis-comunicacion',
      'devops-infra',
      'ia-automatizacion',
      'datos',
    ]),
    level: z.enum(['fundamentos', 'aplicado', 'maestria']),
    format: z.enum(['bootcamp', 'taller', 'crash-course', 'tutorial']),
    duration: z.string().min(1),
    stack: z
      .array(
        z.enum([
          'frontend',
          'backend',
          'fullstack',
          'devops',
          'mobile',
          'data',
          'ia',
          'email',
        ]),
      )
      .min(1),
    audience: z.string().min(1),
    prerequisites: z.array(z.string()).default([]),
    instructor: z.string().min(1),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    status: z.enum(['draft', 'published', 'archived']),
    order: z.number().int().min(0),
  }),
});

export const collections = { cursos };
