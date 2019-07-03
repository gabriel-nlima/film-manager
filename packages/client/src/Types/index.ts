export enum ProjectTypes {
	film = 'Filme',
	shortFilm = 'Curta-metragem',
	halfLengthFilm = 'Media-metragem',
	featureFilm = 'Longa-metragem',
	videoclip = 'Videoclip',
	musical = 'Musical',
	gameplay = 'Gameplay',
	others = 'Outros',
}

export enum GenresTypes {
	comedy = 'Comédia',
	action = 'Ação',
	adventure = 'Aventura',
	romance = 'Romance',
	terror = 'Terror',
	suspense = 'Suspense',
	musical = 'Musical',
	drama = 'Drama',
}

export interface Project {
	[x: string]: string | GenresTypes | ProjectTypes | undefined
	title: string
	type: ProjectTypes
	desc?: string
	genre?: GenresTypes
	_id?: string
}

export interface Character {
	[x: string]: string | undefined
	name: string
	_id?: string
	user?: string
	backgroudHistory?: string
	desc?: string
}

export interface User {
	[x: string]: string | string[] | undefined
	name: string
	email: string
	password: string
	roles: string[]
	_id?: string
	password2?: string
	oldPassword?: string
}
