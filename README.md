# lab_4

[![CI/CD Pipeline](https://github.com/taraaas/lab_4/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/taraaas/lab_4/actions/workflows/ci-cd.yml)

Лабораторна робота №4 з теми **CI/CD**.

## Проєкт
У цій роботі налаштовано:
- GitHub Actions workflow для автоматичної перевірки коду
- lint перевірку
- unit tests
- build проєкту
- автоматичний деплой на Vercel
- quality gate для гілки `main`

## Production URL
lab-4-880spbn6h-taraaas-projects.vercel.app

## Workflow
Pipeline запускається автоматично при:
- `push` у гілки `main` та `develop`
- `pull_request` у гілки `main` та `develop`

## Використані команди
```bash
npm install
npm run lint
npm run test:unit
npm run build