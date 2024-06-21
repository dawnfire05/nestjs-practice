import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll() : Movie[]{
        return this.moviesService.getAll()
    }

    @Get("/search")
    search(@Query("year") searchedYear: String){
        return `We are searching for movies later than ${searchedYear}`;
    }

    @Get("/:id")
    getOne(@Param('id') id : number){
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() createdMovie){
        return this.moviesService.create(createdMovie);
    }

    @Delete("/:id")
    delete(@Param("id") id:number){
        return this.moviesService.delete(id);
    }

    @Patch('/:id')
    patch(@Param('id') id : number, @Body() PatchData : UpdateMovieDto){
        return this.moviesService.update(id, PatchData);
    }
}
