import Button from '../Button';

function RecetteCard({
    type,
    difficulte,
    photo_recette,
    titre,
    date_publication,
    temp_preparation,
    description,
}) {
    return (
        <div className="w-[332px] md:w-[466px]">
            <div>
                <div className="absolute p-4 w-[332px] flex justify-between md:w-[466px]">
                    <p className="bg-tsirotech-background w-[126px] text-center h-8 rounded-[16px] pt-1">
                        {type}
                    </p>
                    <p className="bg-tsirotech-background w-[126px] text-center h-8 rounded-[16px] pt-1">
                        {difficulte}
                    </p>
                </div>

                <div>
                    <img
                        src={photo_recette}
                        alt={`${titre}`}
                        className="w-[332px] h-[208px] rounded-t-[16px] md:w-[466px] md:h-[310px]"
                    />
                </div>
            </div>

            <div className="px-4 border border-tsirotech-border rounded-b-[16px]">
                <div>
                    <h3 className="font-outfit font-bold text-[20px] text-center py-4 md:text-[24px]">
                        {titre}
                    </h3>
                </div>
                <div className="flex justify-between">
                    <p className="space-x-2">
                        <i className="fa fa-calendar text-tsirotech-primary"></i>
                        <span>{date_publication}</span>
                    </p>
                    <p className="space-x-2">
                        <i className="fa fa-clock text-tsirotech-primary"></i>
                        <span>{temp_preparation}</span>
                    </p>
                </div>
                <div className="mt-4">
                    <p className="text-justify line-clamp-3">{description}</p>
                </div>

                <div className="py-4 flex justify-between">
                    <Button icon={'fa-pen'} text={'Modifier'} />
                    <Button
                        icon={'fa-trash'}
                        text={'Supprimer'}
                        type="danger"
                    />
                </div>
            </div>
        </div>
    );
}

export default RecetteCard;
