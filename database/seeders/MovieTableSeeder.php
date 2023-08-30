<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Batman',
                'slug' => 'the-batman',
                'category' => 'Marvel',
                'video_url' => 'https://youtu.be/mqqft2x_Aa4?si=uknlp2-jptJXKpPX',
                'thumbnail' => 'https://awsimages.detik.net.id/community/media/visual/2022/01/06/the-batman_43.png',
                'rating' => 4.5,
                'is_featured' => 1
            ],
            [
                'name' => 'The Spiderman',
                'slug' => 'the-batman',
                'category' => 'Marvel',
                'video_url' => 'https://youtu.be/shW9i6k8cB0?si=aDm8N9H6n08dFFxw',
                'thumbnail' => 'https://awsimages.detik.net.id/community/media/visual/2019/07/09/e3e4f888-6094-49b0-9234-e6762cf69800_43.jpeg',
                'rating' => 3,
                'is_featured' => 0
            ],
            [
                'name' => 'The Spiderman II',
                'slug' => 'the-batman-ii',
                'category' => 'Marvel',
                'video_url' => 'https://youtu.be/shW9i6k8cB0?si=aDm8N9H6n08dFFxw',
                'thumbnail' => 'https://awsimages.detik.net.id/community/media/visual/2019/07/09/e3e4f888-6094-49b0-9234-e6762cf69800_43.jpeg',
                'rating' => 5,
                'is_featured' => 0
            ]
        ];

        Movie::insert($movies);
    }
}
