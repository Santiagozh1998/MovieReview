# Generated by Django 3.0.5 on 2020-04-15 00:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('idmovie', models.IntegerField(primary_key=True, serialize=False)),
                ('scoremovie', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Serie',
            fields=[
                ('idserie', models.IntegerField(primary_key=True, serialize=False)),
                ('scoreserie', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('email', models.CharField(max_length=60, primary_key=True, serialize=False)),
                ('nickname', models.CharField(max_length=50)),
                ('password', models.TextField()),
                ('state', models.BooleanField()),
                ('typeuser', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='CommentSerie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datecomment', models.DateField()),
                ('likescomment', models.IntegerField()),
                ('reportcomment', models.IntegerField()),
                ('contentcomment', models.CharField(max_length=500)),
                ('emailuser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appuser.User')),
                ('idserie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appuser.Movie')),
            ],
        ),
        migrations.CreateModel(
            name='CommentMovie',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datecomment', models.DateField()),
                ('likescomment', models.IntegerField()),
                ('reportcomment', models.IntegerField()),
                ('contentcomment', models.CharField(max_length=500)),
                ('emailuser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appuser.User')),
                ('idmovie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appuser.Movie')),
            ],
        ),
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('permisoinforme', models.BooleanField()),
                ('permisousuarios', models.BooleanField()),
                ('emailuser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appuser.User')),
            ],
        ),
    ]
