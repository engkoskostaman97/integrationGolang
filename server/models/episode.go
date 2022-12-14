package models

import "time"

type Episode struct {
	ID               int                 `json:"id"`
	Title            string              `json:"title" form:"title" gorm:"type: varchar(255)"`
	ThumbnailEpisode string              `json:"thumbnailepisode" form:"thumbnailepisode" gorm:"type: varchar(255)"`
	LinkFilm         string              `json:"linkfilm" form:"linkfilm" gorm:"type: varchar(255)"`
	FilmID           int                 `json:"film_id"`
	Film             FilmEpisodeResponse `json:"film" form:"film" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Description      string              `json:"description" gorm:"type:text" form:"description"`
	CreatedAt        time.Time           `json:"-"`
	UpdatedAt        time.Time           `json:"-"`
}

type EpisodeResponse struct {
	ID               int                 `json:"id"`
	Title            string              `json:"title"`
	ThumbnailEpisode string              `json:"thumbnailepisode"`
	LinkFilm         string              `json:"linkfilm"`
	FilmID           int                 `json:"film_id"`
	Film             FilmEpisodeResponse `json:"film" form:"film"`
	Description      string              `json:"description"`
}

type EpisodeFilmResponse struct {
	ID               int                 `json:"id"`
	Title            string              `json:"title"`
	ThumbnailEpisode string              `json:"thumbnailepisode"`
	Linkfilm         string              `json:"linkfilm"`
	FilmID           int                 `json:"film_id"`
	Film             FilmEpisodeResponse `json:"film" form:"film"`
	Description      string              `json:"description"`
}

func (EpisodeResponse) TableName() string {
	return "episodes"
}

func (EpisodeFilmResponse) TableName() string {
	return "episodes"
}
