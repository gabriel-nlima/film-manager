export enum ProjectTypes {
	Film = 'Filme',
	ShortFilm = 'Curta-metragem',
	HalfLengthFilm = 'Media-metragem',
	FeatureFilm = 'Longa-metragem',
	Videoclip = 'Videoclip',
	Musical = 'Musical',
	Gameplay = 'Gameplay',
	Others = 'Outros',
}

export enum GenresTypes {
	Comedy = 'Comédia',
	Action = 'Ação',
	Adventure = 'Aventura',
	Romance = 'Romance',
	Terror = 'Terror',
	Suspense = 'Suspense',
	Musical = 'Musical',
	Drama = 'Drama',
}

export enum ProjectPhases {
	PreProduction = 'Pré Produção',
	Production = 'Produção',
	PosProduction = 'Pós Produção',
}

export interface Project {
	[x: string]: string | GenresTypes | ProjectTypes | ProjectPhases | undefined
	title: string
	type: ProjectTypes
	desc?: string
	genre?: GenresTypes
	_id?: string
	phase?: ProjectPhases
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
